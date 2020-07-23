import * as React from 'react';
import styles from './Spfxwebpart.module.scss';
import { ISpfxwebpartProps } from './ISpfxwebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Spfxwebpart extends React.Component<ISpfxwebpartProps, {}> {
  public render(): React.ReactElement<ISpfxwebpartProps> {
    return (
      <div className={ styles.spfxwebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
