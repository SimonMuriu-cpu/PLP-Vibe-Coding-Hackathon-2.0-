export const SERVICE_CATEGORIES = [
  { value: 'repairs', label: 'General Repairs', icon: '🔧' },
  { value: 'cleaning', label: 'Cleaning Services', icon: '🧹' },
  { value: 'tutoring', label: 'Tutoring', icon: '📚' },
  { value: 'mechanics', label: 'Auto Mechanics', icon: '🚗' },
  { value: 'electrical', label: 'Electrical Work', icon: '⚡' },
  { value: 'plumbing', label: 'Plumbing', icon: '🔧' },
  { value: 'carpentry', label: 'Carpentry', icon: '🪚' },
  { value: 'gardening', label: 'Gardening', icon: '🌱' },
  { value: 'beauty', label: 'Beauty Services', icon: '💄' },
  { value: 'fitness', label: 'Fitness Training', icon: '💪' },
  { value: 'other', label: 'Other Services', icon: '🛠️' }
];

export const BOOKING_STATUS_LABELS = {
  'pending': { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  'confirmed': { label: 'Confirmed', color: 'bg-blue-100 text-blue-800' },
  'in_progress': { label: 'In Progress', color: 'bg-purple-100 text-purple-800' },
  'completed': { label: 'Completed', color: 'bg-green-100 text-green-800' },
  'cancelled': { label: 'Cancelled', color: 'bg-red-100 text-red-800' }
};

export const PAYMENT_STATUS_LABELS = {
  'pending': { label: 'Payment Pending', color: 'bg-yellow-100 text-yellow-800' },
  'paid': { label: 'Paid', color: 'bg-green-100 text-green-800' },
  'failed': { label: 'Payment Failed', color: 'bg-red-100 text-red-800' },
  'refunded': { label: 'Refunded', color: 'bg-gray-100 text-gray-800' }
};