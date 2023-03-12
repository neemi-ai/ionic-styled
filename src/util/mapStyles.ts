type Map = { [key: string]: string; };
type Props = { [key: string]: any; };

const mapStyles = <TMap extends Map>(map: TMap) => (props: Props) => Object
  .keys(props)
  .reduce((acc, key) => {
    if (map[key]) {
      return { ...acc, [map[key]]: props[key] };
    }

    return acc;
  }, {});

export default mapStyles;
