"use client";
// CSS
import { useState, useEffect, useRef } from "react";
import classes from "./index.module.scss";

const Autocomplete = (props) => {
    const { options, onChange, placeholder, className } = props;
    
    const dropdownRef = useRef();

    const [isOpen, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

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
        console.log({list});

        setSelectedValue(list?.label);
        setOpen(false);
    };

    const clearSelectionValue = () => {
        setSelectedValue('');
        setSearchValue('');
        setOpen(true);
    };


    const renderDropdown = () => {
        if (searchValue || isOpen) {
            return (
                <div className={classes.optionsContainer}>
                    <ul>
                        {options.map(list => (
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
                onChange={handleSearch} 
                value={searchValue} />
        }
        return (
            <>
                <div className={classes.selectedContent}>
                    <label className={classes.selectedLabel}>{selectedValue}</label>
                    <i className="fa fa-close" onClick={clearSelectionValue}></i>
                </div>
            </>
        )
    };

    console.log({isOpen, selectedValue});

    return (
        <>
            <div className={classes.formAutoComplete} ref={dropdownRef}>
                {renderMainContent()}
                {renderDropdown()}
            </div>
        </>
    );
}

export default Autocomplete;