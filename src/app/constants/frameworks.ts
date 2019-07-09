export const FRAMEWORKS: Array<Framework> = [{
  id: 'react',
  title: 'React',
  imageUrl: './assets/images/react.png',
  color: '#00D8FF'
}, {
  id: 'angular',
  title: 'Angular',
  imageUrl: './assets/images/angular.png',
  color: '#C31B23'
}, {
  id: 'vue',
  title: 'Vue',
  imageUrl: './assets/images/vue.png',
  color: '#40B883'
}];


export interface Framework {
  id: string;
  title: string;
  imageUrl: string;
  color: string;
  votes?: number;
}
