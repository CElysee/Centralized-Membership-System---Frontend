import {
  Hero,
  Section,
  FeatureCard,
  StatsCard,
  AssociationCard,
  Badge,
  Button,
} from '@/components/ui';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-20">
      {/* Hero Section */}
      <Hero
        tag="Centralized Membership Management"
        tagIcon={
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" />
          </svg>
        }
        headline="Unify Your Associations Empower Your Members"
        headlineHighlight={[
          { text: 'Associations', color: 'orange' },
          { text: 'Members', color: 'purple' },
        ]}
        description="A comprehensive membership system designed for RCOT and affiliated associations. Streamline registrations, manage memberships, and grow your community."
        primaryAction={{
          label: 'Launch Dashboard',
          href: '/dashboard',
          icon: (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          ),
        }}
        secondaryAction={{
          label: 'View Documentation',
          href: '/docs',
        }}
      />

      {/* Stats Section */}
      <Section background="neutral" className="py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            value="10K+"
            label="Active Members"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            trend={{ value: '12% increase', isPositive: true }}
          />
          <StatsCard
            value="50+"
            label="Affiliated Associations"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            trend={{ value: '3 new this month', isPositive: true }}
          />
          <StatsCard
            value="98%"
            label="Satisfaction Rate"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <StatsCard
            value="24/7"
            label="Support Available"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Everything You Need to"
        titleHighlight={{ text: 'Manage Memberships', color: 'orange' }}
        subtitle="A complete solution designed to handle every aspect of membership management, from onboarding to renewals and beyond."
        background="white"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            iconColor="orange"
            title="Member Management"
            description="Comprehensive member profiles with complete lifecycle tracking from registration to renewal."
            features={[
              'Profile management',
              'Membership tiers',
              'Bulk operations',
              'Activity history',
            ]}
          />
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            iconColor="green"
            title="Secure Authentication"
            description="Enterprise-grade security with role-based access control and multi-factor authentication."
            features={[
              'SSO integration',
              'Role permissions',
              'Audit logging',
              'Data encryption',
            ]}
          />
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
            iconColor="purple"
            title="Analytics & Reports"
            description="Real-time insights and customizable reports to track membership growth and engagement."
            features={[
              'Custom dashboards',
              'Export options',
              'Trend analysis',
              'KPI tracking',
            ]}
          />
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            }
            iconColor="purple"
            title="Payment Processing"
            description="Integrated payment solutions with multiple gateway support and automated invoicing."
            features={[
              'Multiple gateways',
              'Auto-renewals',
              'Invoice generation',
              'Payment history',
            ]}
          />
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            iconColor="pink"
            title="Communication Hub"
            description="Automated email campaigns, notifications, and member engagement tools."
            features={[
              'Email templates',
              'SMS notifications',
              'Newsletter builder',
              'Engagement tracking',
            ]}
          />
          <FeatureCard
            icon={
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            iconColor="blue"
            title="Multi-Association"
            description="Centralized management for multiple associations with individual customization."
            features={[
              'Shared database',
              'Individual branding',
              'Cross-membership',
              'Central admin',
            ]}
          />
        </div>
      </Section>
      <Section background="white" className="py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div>
            <Badge
              variant="warning"
              className="mb-6 border-brand-orange-200 bg-brand-orange-50 text-brand-orange-600"
            >
              <span className="flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Affiliated Associations
              </span>
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              One System,{' '}
              <span className="text-brand-orange-500">Many Associations</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              Our centralized system supports multiple associations under the
              RCOT umbrella, each with their own branding and member base while
              sharing a unified database and administrative tools.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <StatsCard
                value="25+"
                label="Active Associations"
                className="shadow-md"
                valueClassName="text-brand-orange-500"
              />
              <StatsCard
                value="12,847"
                label="Total Members"
                className="shadow-md"
                valueClassName="text-brand-purple-500"
              />
            </div>

            <Button size="lg" className="shadow-lg shadow-brand-orange-500/20">
              View All Associations
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AssociationCard
              initials="RC"
              color="orange"
              name="RCOT Main Chapter"
              memberCount="5,420"
              location="National"
            />
            <AssociationCard
              initials="NR"
              color="blue"
              name="Northern Regional..."
              memberCount="1,890"
              location="North"
            />
            <AssociationCard
              initials="WD"
              color="purple"
              name="Western Division"
              memberCount="2,340"
              location="West"
            />
            <AssociationCard
              initials="EA"
              color="green"
              name="Eastern Associates"
              memberCount="1,650"
              location="East"
            />
            <AssociationCard
              initials="SC"
              color="purple"
              name="Southern Chapter"
              memberCount="980"
              location="South"
            />
            <AssociationCard
              initials="CH"
              color="pink"
              name="Central Hub"
              memberCount="567"
              location="Central"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
