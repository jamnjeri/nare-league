import React from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';

const HomeSectionMenu = ({ sections,selectedSection, onSelect }) => {
    const handleSectionSelect = (sectionId) => {
        onSelect(sectionId);
    };

    const defaultValue = '1';

    return (
        <TabContext value={defaultValue}>
            <Box sx={{ width: '100%' }}>
                <TabList aria-label="section tabs">
                    {sections.map((section) => (
                        <Tab
                            key={section.id}
                            label={section.label}
                            onClick={() => handleSectionSelect(section.id)}
                            sx={{
                                textTransform: 'capitalize',
                                color: section.id === selectedSection ? '#FFC11C' : 'white',
                            }}
                        />
                    ))}
                </TabList>
            </Box>
        </TabContext>
    );
};

export default HomeSectionMenu;

