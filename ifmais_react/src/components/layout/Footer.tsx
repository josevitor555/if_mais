import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-gray-50 border-t border-gray-200 py-8 mt-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-gray-600">
            Copyright 2024. Todos os Direitos Reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Agradecimentos, Cruz 2024
          </p>
        </div>
      </div>
    </footer>
  );
}