import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import styles from './styles.module.scss';

interface RichTextProps {
  document: any;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { data } = node;
      return (
        <div className={styles.image}>
          <img
            src={`https://${data.target.fields.file.url}`}
            alt={data.target.fields.description}
          />
        </div>
      );
    },
  },
} as Options;

export default function RichText({ document }: RichTextProps) {
  return (
    <div className={styles.richtext}>
      {documentToReactComponents(document, renderOptions)}
    </div>
  );
}
