import { FadeIn } from "@/components/ui/fade-in";

export const ComparisonSection = () => (
  <section className="py-20 bg-white dark:bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <FadeIn direction="left">
            <h2 className="text-xl font-bold text-brand-500 uppercase tracking-wider mb-2">
              AI Tools Automate Tasks
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              A Smarter AI Workforce for Growing Businesses
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Most AI tools and chatbots can only handle one small task. But
                in any business, missing a call, a message, or a follow-up can
                mean losing revenue to a competitor.
              </p>
              <p>
                That's why you need a team of AI systems that work together,
                helping with reception, follow-ups, customer communication, and
                revenue-driving tasks.
              </p>
              <p>
                This isn’t basic automation. It’s intelligent AI that learns how
                your business operates, works across your entire operation, and
                helps you grow, close more deals, and keep everything running
                smoothly.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="lg:col-span-3 bg-gray-50 dark:bg-dark-card p-2 rounded-3xl border border-gray-100 dark:border-dark-border relative overflow-hidden">
          <FadeIn direction="right" className="h-full">
            <div className="w-full h-full">
              <img
                src="/tools_dis.png"
                alt="AI Workforce vs Traditional AI Tools - Multi-skilled AI agents working together to transform business operations"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
