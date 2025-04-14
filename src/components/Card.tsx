// components/Card.tsx
interface CardProps {
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const Card = ({ title, content, actions }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-gray-600">{content}</div>
        {actions && <div className="mt-4">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
