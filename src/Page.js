import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import { useEffect, useState } from 'react';
import venue from './content/venue.md';
import faq from './content/faq.md';
import lineup from './content/lineup.md';


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const fileMap = {
    'venue': venue,
    'faq': faq,
    'lineup': lineup
};

export default function Page(props) {

    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        const filePath = fileMap[props.page];
        if (filePath) {
            fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    setFileContent(data);
                })
                .catch(error => {
                    console.error('Error fetching file:', error);
                });
        } else {
            console.error('No file mapped for the given page:', props.page);
        }
    }, [props.page]);

    return (
        <>
            <Box>
                <Typography>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} children={fileContent} />
                </Typography>
            </Box>
        </>


    )
}
