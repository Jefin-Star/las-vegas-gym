export interface GymStatusResult {
  isOpen: boolean;
  session: 'morning' | 'evening' | 'closed';
  label: string;
  subtext: string;
  nextOpenText: string;
  currentTimeString: string;
  isSunday: boolean;
}

export function getGymCurrentStatus(): GymStatusResult {
  // Get current time in Indian Standard Time (Asia/Kolkata)
  const now = new Date();
  
  // Format options for IST
  const istFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    weekday: 'long'
  });

  const parts = istFormatter.formatToParts(now);
  const findPart = (type: string) => parts.find(p => p.type === type)?.value || '';

  const weekday = findPart('weekday');
  const hour = parseInt(findPart('hour'), 10);
  const minute = parseInt(findPart('minute'), 10);
  
  const currentMinutes = hour * 60 + minute;
  const isSunday = weekday.toLowerCase() === 'sunday';

  // Session limits in minutes from midnight:
  // Morning: 5:30 AM (330 mins) to 10:00 AM (600 mins)
  const morningStart = 5 * 60 + 30; // 330
  const morningEnd = 10 * 60;       // 600

  // Evening: 4:00 PM (960 mins) to 9:30 PM (1290 mins)
  const eveningStart = 16 * 60;     // 960
  const eveningEnd = 21 * 60 + 30;  // 1290

  // Readable 12-hour format string for current time
  const time12Formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const currentTimeString = `${time12Formatter.format(now)} IST (${weekday})`;

  if (isSunday) {
    return {
      isOpen: false,
      session: 'closed',
      label: 'CLOSED TODAY',
      subtext: 'Sunday is our dedicated muscle recovery day.',
      nextOpenText: 'Opens Monday at 5:30 AM',
      currentTimeString,
      isSunday: true
    };
  }

  // Check morning session
  if (currentMinutes >= morningStart && currentMinutes < morningEnd) {
    const remainingMins = morningEnd - currentMinutes;
    const hrs = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
    const remainingStr = hrs > 0 ? `${hrs}h ${mins}m remaining` : `${mins}m remaining`;

    return {
      isOpen: true,
      session: 'morning',
      label: 'OPEN NOW • MORNING BATCH',
      subtext: `Morning workout in progress (${remainingStr} until 10:00 AM)`,
      nextOpenText: 'Closes at 10:00 AM • Evening batch starts at 4:00 PM',
      currentTimeString,
      isSunday: false
    };
  }

  // Check evening session
  if (currentMinutes >= eveningStart && currentMinutes < eveningEnd) {
    const remainingMins = eveningEnd - currentMinutes;
    const hrs = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
    const remainingStr = hrs > 0 ? `${hrs}h ${mins}m remaining` : `${mins}m remaining`;

    return {
      isOpen: true,
      session: 'evening',
      label: 'OPEN NOW • EVENING BATCH',
      subtext: `Evening workout in progress (${remainingStr} until 9:30 PM)`,
      nextOpenText: 'Closes tonight at 9:30 PM',
      currentTimeString,
      isSunday: false
    };
  }

  // Otherwise closed (between morning and evening, or before morning, or after evening)
  if (currentMinutes < morningStart) {
    return {
      isOpen: false,
      session: 'closed',
      label: 'CLOSED • OPENS AT 5:30 AM',
      subtext: 'Early morning session starts soon.',
      nextOpenText: 'Morning batch: 5:30 AM – 10:00 AM',
      currentTimeString,
      isSunday: false
    };
  }

  if (currentMinutes >= morningEnd && currentMinutes < eveningStart) {
    return {
      isOpen: false,
      session: 'closed',
      label: 'AFTERNOON BREAK • OPENS AT 4:00 PM',
      subtext: 'Gym re-opens for the evening session at 4:00 PM.',
      nextOpenText: 'Evening batch: 4:00 PM – 9:30 PM',
      currentTimeString,
      isSunday: false
    };
  }

  // After evening session (currentMinutes >= eveningEnd)
  return {
    isOpen: false,
    session: 'closed',
    label: 'CLOSED FOR THE NIGHT',
    subtext: 'Evening session concluded. Rest and rehydrate!',
    nextOpenText: weekday.toLowerCase() === 'saturday' 
      ? 'Tomorrow is Sunday (Closed). Re-opens Monday at 5:30 AM'
      : 'Opens tomorrow morning at 5:30 AM',
    currentTimeString,
    isSunday: false
  };
}
