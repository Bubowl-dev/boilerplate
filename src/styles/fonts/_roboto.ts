import localFont from 'next/font/local';

export const roboto = localFont({
  variable: '--roboto',
  src: [
    {
      path: '../../../public/fonts/roboto/roboto-black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-blackItalic.ttf',
      weight: '900',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/roboto/roboto-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-boldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/roboto/roboto-medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-mediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/roboto/roboto-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/roboto/roboto-light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-lightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/roboto/roboto-thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/roboto/roboto-thinItalic.ttf',
      weight: '200',
      style: 'italic'
    }
  ]
});