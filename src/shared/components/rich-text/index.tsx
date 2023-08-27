import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './styles.module.scss';

interface RichTextProps {
  document: any;
}

export default function RichText({ document }: RichTextProps) {
  return (
    <div className={styles.richtext}>
      {documentToReactComponents(document)}
    </div>
  );
}
