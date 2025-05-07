import SmartIntakeForm from '@/components/SmartIntakeForm';

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Smart Case Evaluation
        </h1>
        <SmartIntakeForm />
      </div>
    </div>
  );
}