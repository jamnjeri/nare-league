import React, { useState, useEffect } from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';

const HomeSectionMenu = ({ sections,selectedSection, onSelect }) => {
    const defaultValue = sections[0]?.id || 1; // Default to the first section's id if available, otherwise default to 1
    const [currentSection, setCurrentSection] = useState(defaultValue);

    useEffect(() => {
        // Sync currentSection with selectedSection if provided
        if (selectedSection !== undefined && selectedSection !== currentSection) {
            setCurrentSection(selectedSection);
        }
    }, [selectedSection, currentSection]);

    const handleSectionSelect = (sectionId) => {
        setCurrentSection(sectionId);
        onSelect(sectionId);
    };

    return (
        <TabContext value={currentSection}>
            <Box sx={{ width: '100%' }}>
                <TabList aria-label="section tabs">
                    {sections.map((section) => (
                        <Tab
                            key={section.id}
                            label={section.label}
                            value={section.id}
                            onClick={() => handleSectionSelect(section.id)}
                            sx={{
                                textTransform: 'capitalize',
                                color: section.id === currentSection? '#FFC11C' : 'white',
                            }}
                        />
                    ))}
                </TabList>
            </Box>
        </TabContext>
    );
};

export default HomeSectionMenu;

