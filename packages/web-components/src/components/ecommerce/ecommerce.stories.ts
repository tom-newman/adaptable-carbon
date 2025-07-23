/**
 * Copyright IBM Corp. 2019, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { STACK_ORIENTATION } from './ecommerce';
import './index';

import '../grid/index';

import '../ui-shell/index';
import {
  SIDE_NAV_COLLAPSE_MODE,
  SIDE_NAV_USAGE_MODE,
} from '../ui-shell/side-nav';

import View16 from '@carbon/icons/lib/view/16.js';
import FolderOpen16 from '@carbon/icons/lib/folder--open/16.js';
import Folders16 from '@carbon/icons/lib/folders/16.js';
import ArrowRight16 from '@carbon/icons/lib/arrow--right/16.js';
import Launch16 from '@carbon/icons/lib/launch/16.js';
import '../tile/index';
import '../ai-label';
import '../icon-button';
import '../link';
import storyDocs from './tile.mdx';
// import styles from '../tile/tile-story.scss?lit';
import '../../../.storybook/templates/with-layer';
const linksHref = '#';

import styles from './ecommerce.scss?lit';

const orientationOptions = {
  ['Vertical']: STACK_ORIENTATION.VERTICAL,
  ['Horizontal']: STACK_ORIENTATION.HORIZONTAL,
};

const defaultArgs = {
  gap: '0',
  orientation: STACK_ORIENTATION.VERTICAL,
};

const content = html`
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr />
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>
`;

const actions = html`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${View16({ slot: 'icon' })}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${FolderOpen16({ slot: 'icon' })}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${Folders16({ slot: 'icon' })}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-ai-label-action-button>View details</cds-ai-label-action-button>
`;

const controls = {
  gap: {
    control: 'select',
    description: 'gap',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  },
  orientation: {
    control: 'select',
    description: 'orientation',
    options: orientationOptions,
  },
};

export const Default = {
  args: defaultArgs,
  argTypes: controls,
  render: ({ gap, orientation }) =>
    html` <cds-ecommerce gap="${gap}" orientation="${orientation}">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </cds-ecommerce>`,
};
export const Home = {
  argTypes: {
    hasRoundedCorners: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const { hasRoundedCorners } = args ?? {};
    const result = html` <style>
        ${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0">Ambitious</cds-header-name>
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item is-active href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      <cds-tile-group>
        <div>
          <cds-selectable-tile ?has-rounded-corners="${hasRoundedCorners}">
            <span>${content}</span>
            <cds-ai-label alignment="bottom-left"> ${actions}</cds-ai-label>
          </cds-selectable-tile>

          <cds-selectable-tile ?has-rounded-corners="${hasRoundedCorners}">
            <span>${content}</span>
            <cds-ai-label alignment="bottom-left"> ${actions}</cds-ai-label>
          </cds-selectable-tile>

          <cds-selectable-tile ?has-rounded-corners="${hasRoundedCorners}">
            <span>${content}</span>
            <cds-ai-label alignment="bottom-left"> ${actions}</cds-ai-label>
          </cds-selectable-tile>
        </div>
      </cds-tile-group>`;
    (result as any).hasMainTag = true;
    return result;
  },
};
export const List = {
  render: () =>
    html` <cds-ecommerce gap="6" orientation="horizontal">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </cds-ecommerce>`,
};
export const Product = {
  render: () =>
    html` <cds-ecommerce gap="6" orientation="horizontal">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </cds-ecommerce>`,
};

const meta = {
  title: 'Templates/ecommerce',
};

export default meta;
