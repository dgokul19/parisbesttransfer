"use client";
// CSS
import { useState, useEffect, useRef } from "react";
import classes from "./index.module.scss";

const Autocomplete = (props) => {
    const { options, onChange, value, placeholder, disabled, name } = props;
    
    const dropdownRef = useRef();

    const [isOpen, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(value || '');

    useEffect(() => {
        const handler = (event) => {
          if (!dropdownRef.current) {
            return;
          }
          if (!dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener("click", handler, true);
        return () => {
          document.removeEventListener("click", handler);
        };
      }, []);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleSelection = (list) => {
        setOpen(false);
        onChange(list, name);
        setSelectedValue(list?.label);
        setSearchValue('');
    };

    const clearSelectionValue = () => {
        setSelectedValue('');
        setSearchValue('');
        setOpen(true);
    };

    const renderDropdown = () => {
        if (searchValue || isOpen) {
            let filterdKeys = searchValue ? options.filter(li => (li.label).toLowerCase().indexOf(searchValue?.toLowerCase()) > -1) : options;
            return (
                <div className={classes.optionsContainer}>
                    <ul>
                        {filterdKeys.map(list => (
                            (list.type === "heading") ? 
                            <li className={`${classes.lisOption} ${classes.headingOption}`} key={list.label}>{list.label}</li> : 
                            <li className={classes.lisOption} key={list.label} onClick={() => handleSelection(list)}>{list.label}</li>
                        ))}
                    </ul>
                </div>
            )
        }
    };

    const renderMainContent = () => {
        if(!selectedValue){
            return <input placeholder={placeholder} 
                onFocus={(e) => setOpen(true)}
                name={name}
                onChange={handleSearch} 
                value={searchValue} />
        }
        return (
            <>
                <div className={classes.selectedContent}>
                    <label className={classes.selectedLabel} onClick={() =>  setOpen(true)}>{selectedValue}</label>
                    <i className="fa fa-close" onClick={clearSelectionValue}></i>
                </div>
            </>
        )
    };

    return (
        <>
            <div className={classes.formAutoComplete} ref={dropdownRef} disabled={disabled}>
                {renderMainContent()}
                {renderDropdown()}
            </div>
        </>
    );
}

export default Autocomplete;