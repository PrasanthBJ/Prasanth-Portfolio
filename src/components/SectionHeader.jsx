export default function SectionHeader({ path }) {
  return (
    <p className="font-mono text-sm text-[#5B6470]">
      <span className="text-[#7C8B7A]">$</span> cd {path}
    </p>
  );
}
