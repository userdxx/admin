/* eslint-disable */
/**
 *- Gantt toolbar
 * 
 * Taken from vanilla advanced example with imports
 * from the bryntum-gantt package.
 */
import {Combo,BryntumWidgetAdapterRegister  } from 'bryntum-gantt';
/**
 * @module ColorField
 */
const baseColors = [
    'maroon', 'red', 'orange', 'yellow',
    'olive', 'green', 'purple', 'fuchsia',
    'lime', 'teal', 'aqua', 'blue', 'navy',
    'black', 'gray', 'silver', 'white'
];

class ColorField extends Combo {
    static get type() {
        return 'colorfield';
    }

    static get defaultConfig() {
        return {
            clearable : true,
            items     : baseColors,
            picker    : {
                cls     : 'b-color-picker-container',
                itemCls : 'b-color-picker-item',
                itemTpl : item => `<div style="background-color:${item.id}"></div>`
            }
        };
    }
}

BryntumWidgetAdapterRegister.register(ColorField.type, ColorField);

// eof
