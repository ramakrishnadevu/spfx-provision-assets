import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxwebpartWebPartStrings';
import Spfxwebpart from './components/Spfxwebpart';
import { ISpfxwebpartProps } from './components/ISpfxwebpartProps';

export interface ISpfxwebpartWebPartProps {
  description: string;
}

export default class SpfxwebpartWebPart extends BaseClientSideWebPart <ISpfxwebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxwebpartProps> = React.createElement(
      Spfxwebpart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
