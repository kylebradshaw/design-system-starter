import { AppComponent } from '../app/app.component';

export default {
  title: 'My App',
};

export const toStorybook = () => ({
  component: AppComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};
