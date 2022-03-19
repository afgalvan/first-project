import { render as renderContent } from 'lit-html';

export const render = (component, parent, props) => {
  const output = component(props);
  typeof parent === 'string'
    ? renderFromSelector(output, parent)
    : renderFromHtml(output, parent);
};

const renderFromHtml = (component, parent) => renderContent(component, parent);

const renderFromSelector = (component, parent) =>
  renderContent(component, document.querySelector(parent));

export const useComponent = (query) => document.querySelector(query);

export const style = (query) => useComponent(query).style;

export const toggleVision = (query, vision) => {
  const visibility = style(query).display === vision[0] ? vision[1] : vision[0];
  style(query).display = visibility;
};
