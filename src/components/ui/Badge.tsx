type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="bg-indigo-600 text-white text-xs font-semibold px-2 py-0.5 rounded-lg">
      {children}
    </span>
  );
}
