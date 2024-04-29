import { Headline } from './components';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={`${styles.homePage} maxWidth`}>
      <Headline
        width={260}
        first='The return on'
        typeStrings={[
          'Investment',
          'Imagination',
          'Inclusion',
          'Influence',
          'Innovation',
          'Inspiration',
          'Integration',
        ]}
        secondR='agency'
      />

      <h3 className='neue-b'>Our work</h3>
    </div>
  );
}
