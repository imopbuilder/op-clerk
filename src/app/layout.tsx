import { ThemeProvider } from '@/client/providers/theme-provider';
import { buttonVariants } from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import { cn } from '@/lib/utils/cn';
import '@/styles/main.scss';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <ClerkProvider
            appearance={{
              elements: {
                // Card
                card: 'bg-background dark:border dark:border-border',

                // Header
                headerTitle: 'text-foreground',
                headerSubtitle: 'text-sm text-muted-foreground',

                // Social buttons
                socialButtonsBlockButton: cn(buttonVariants({ variant: 'outline', size: 'lg', className: 'hover:bg-muted text-foreground' })),
                socialButtonsProviderIcon__github: 'dark:invert',

                // Divider
                dividerLine: 'bg-border',
                dividerText: 'text-muted-foreground',

                // Form
                formButtonPrimary: cn(buttonVariants({ size: 'lg', className: 'text-xs' })),
                formFieldInput: cn(inputVariants({ className: 'text-foreground' })),
                formFieldLabel: cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground mb-1'),

                // Footer
                footerActionText: 'text-xs text-muted-foreground',
                footerActionLink: cn(
                  buttonVariants({ variant: 'link', size: 'sm', className: 'p-0 h-auto text-muted-foreground hover:text-foreground duration-0' }),
                ),
              },
            }}
          >
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
