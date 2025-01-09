import React from 'react';
      import HeroSection from './sections/HeroSection';
      import FeaturesSection from './sections/FeaturesSection';
      import PortfolioSection from './sections/PortfolioSection';
      import RepairSection from './sections/RepairSection';

      const HomePage = () => {
        return (
          <div className="min-h-screen text-white">
            <HeroSection />
            <FeaturesSection />
            <div id="builder-section">
              <PortfolioSection />
            </div>
            <RepairSection />
          </div>
        );
      };

      export default HomePage;
