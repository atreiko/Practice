import React, { useState } from 'react'
import s from './AccessoryTabs.module.css'
import Tab from '../Tab'
import Select from 'react-select'
import { 
    customStyles,
    sort,
    bowlForm,
    amountOfRawMaterials,
    flaskBrands,
    flaskInnerDiameter,
    flaskExternalDiameter,
    connectionType,
    heatEquipment,
    hosesSet,
    ruffType,
    rubberType
} from '../selects/selects'


const AccessoryTabs = ({ accessoryTabButtons }) => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
            {
                accessoryTabButtons ?
                    accessoryTabButtons.map((accTab, index)=> (
                        <Tab key={accTab} toggleState={toggleState} index={index + 1} toggleTab={toggleTab} title={accTab} />   
                    ))
                        :
                    null           
            }
            </div>
            <div className={s.contents}>
                <div className={toggleState === 1 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={bowlForm} placeholder='Bowl Form' />
                        <Select styles={customStyles} options={amountOfRawMaterials} placeholder='Grams' />
                    </div>
                </div>
                <div className={toggleState === 2 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div>
                        <div className={s.selectsWrapper}>
                            <Select styles={customStyles} options={sort} placeholder='Sort' />
                            <Select styles={customStyles} options={flaskBrands} placeholder='Brands' />
                            <Select styles={customStyles} options={flaskInnerDiameter} placeholder='Inner Diameter' />
                            <Select styles={customStyles} options={flaskExternalDiameter} placeholder='External Diameter' />
                        </div>
                        <div className={s.selectsWrapper}>
                            <Select styles={customStyles} options={connectionType} placeholder='Connection Type' />
                        </div>
                    </div>
                </div>
                <div className={toggleState === 3 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={hosesSet} placeholder='Hoses Set' />
                    </div>
                </div>
                <div className={toggleState === 4 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={heatEquipment} placeholder='Heat Equipment' />
                    </div>
                </div>
                <div className={toggleState === 5 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={ruffType} placeholder='Ruff Type' />
                    </div>
                </div>
                <div className={toggleState === 6 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={rubberType} placeholder='Rubber Type' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessoryTabs


