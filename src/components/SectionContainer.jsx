export default function SectionContainer({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-[100px] bg-transparent ${className}`}>
      <div className="responsive-container">
        {children}
      </div>
    </section>
  );
}
