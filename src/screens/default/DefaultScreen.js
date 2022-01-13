import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const DefaultScreen = observer((props) => {
  useEffect(() => {
    props.history.push('/home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
});

export default DefaultScreen;
