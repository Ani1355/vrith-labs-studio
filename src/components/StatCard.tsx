interface StatCardProps {
  value: string;
  label: string;
  color: "blue" | "purple" | "amber";
}

const StatCard = ({ value, label, color }: StatCardProps) => {
  const colorClasses = {
    blue: "bg-stat-blue/10 border-stat-blue/20",
    purple: "bg-stat-purple/10 border-stat-purple/20",
    amber: "bg-stat-amber/10 border-stat-amber/20",
  };

  return (
    <div className={`p-6 rounded-2xl border ${colorClasses[color]} hover-lift`}>
      <div className="text-3xl sm:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
