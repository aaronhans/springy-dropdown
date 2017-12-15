class MyComponent extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['greeting'];
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `<ul class="outer">
  <li class="question">
    <label>Days listed <span class="triangle"></span></label>
    <field>No Limit</field>
    <ul class="springy">
      <li>No Limit</li>
      <li>1-2 days</li>
      <li>3 days</li>
      <li>1 week</li>
      <li>1 month</li>
    </ul>
  </li>
  <li class="question">
    <label>Maximum HOA Dues <span class="triangle"></span></label>
    <field>Any</field>
    <ul class="springy">
      <li>Any</li>
      <li>No HOA Dues</li>
      <li>$15/month</li>
      <li>$30/month</li>
      <li>$60/month</li>
      <li>$90/month</li>
      <li>$120/month</li>
      <li>$200/month</li>
      <li>$500/month</option>
      <li>$1000/month</li>
    </ul>
  </li>
  `;
  }
}

window.customElements.define('my-component', MyComponent);
