import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Welcome to your Cookbook, a recipe orginization app. You can add, edit, and delete your recipes and then have them all located in one convenient place.
      </p>
    </div>
  </div>
);

export default AboutPage;
