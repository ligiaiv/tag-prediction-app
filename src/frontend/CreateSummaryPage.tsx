import React, { useState } from 'react';
import { Autocomplete, Box, Button, Chip, Input } from '@mui/joy';
import { defaultTags } from './samples.ts';

const CreateSummaryPage: React.FunctionComponent = () => {
  const [tags, setTags] = useState<string[]>([]);

  const onTagFieldChange = (event: React.SyntheticEvent, value: string, reason: string|null) => {
    if (tags.indexOf(value) === -1) {
      setTags([...tags,value]);
    }
  }
  const onChipClick = (tagName: string) => {
    setTags(tags.filter(tag => tag != tagName));
  }
  const submitSummaryRequest = async () => {

  }
  return (
    <div className="central-container">
      <form action={submitSummaryRequest}>
      <div className="form" >
        <h1>Create Summary</h1>
        <p>Title</p>
        <Input data-testid ="title-input" className={"text-input"} placeholder={"input title here"}></Input>
        <p>Tags</p>
        <Autocomplete className={"autocomplete"} options={defaultTags} onInputChange={onTagFieldChange} placeholder={"pick your tags"}/>
        <Box sx ={{
          height: 100,
          width: 400
        }}>
        {tags.map(tag => (<Chip sx={{margin:'2px'}} onClick={() => onChipClick(tag)}>{tag}</Chip>))}
        </Box>
      </div>
      <div className="form-bottom">
        <Button type={"submit"} sx={{ justifyContent: "flex-end", bgcolor:'#f76c6c'}}>Generate summary</Button>
      </div>
      </form>
    </div>
  )
}
export default CreateSummaryPage;