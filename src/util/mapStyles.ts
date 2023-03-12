type Map = { [key: string]: string | string[]; };
type Props = { [key: string]: any; };

const mapStyles = <TMap extends Map>(map: TMap) => (props: Props) => {
  const styles = Object
    .keys(props)
    .reduce((acc, key) => {
      if (!map[key]) {
        return acc;
      }

      if (typeof map[key] === 'string') {
        // @ts-ignore
        return { ...acc, [map[key]]: props[key] };
      }

      if (Array.isArray(map[key])) {
        // @ts-ignore
        const nestedStyles = map[key].reduce((nestedAcc, nestedKey) => {
          return { ...nestedAcc, [nestedKey]: props[key] };
        }, {});

        return { ...acc, ...nestedStyles };
      }

      return acc;
    }, {});

  console.log('==============================================\n') // eslint-disable-line no-console
  console.log('styles', styles, '\n') // eslint-disable-line no-console
  console.log('==============================================\n') // eslint-disable-line no-console

  return styles;
}

export default mapStyles;
