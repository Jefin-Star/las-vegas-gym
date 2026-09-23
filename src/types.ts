export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  totalPrice: number;
  pricePerMonth?: number;
  admissionFee: number;
  membershipFee?: number;
  hasAdmissionFee: boolean;
  savingsText?: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export interface GymTiming {
  session: string;
  timeRange: string;
  description: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  image?: string;
}
