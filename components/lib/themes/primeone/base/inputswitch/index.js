export default {
    css: ({ dt }) => `
.p-inputswitch {
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
}

.p-inputswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: var(--p-inputswitch-border-radius);
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background: var(--p-inputswitch-background);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: var(--p-inputswitch-border-radius);
    outline-color: transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: var(--p-inputswitch-handle-background);
    width: 1rem;
    height: 1rem;
    left: 0.25rem;
    margin-top: -0.5rem;
    border-radius: 50%;
    transition: all ${dt('transition.duration')};
}

.p-inputswitch.p-highlight .p-inputswitch-slider {
    background: var(--p-inputswitch-background-checked);
}

.p-inputswitch.p-highlight .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-checked);
    left: 1.25rem;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider {
    background: var(--p-inputswitch-background-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: var(--p-inputswitch-background-checked-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-checked-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:focus-visible) .p-inputswitch-slider {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-inputswitch.p-invalid > .p-inputswitch-slider {
    background: var(--p-inputswitch-background-invalid);
}

.p-inputswitch.p-invalid > .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-invalid);
}
`
};