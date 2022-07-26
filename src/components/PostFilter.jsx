import React from 'react';
import MainInput from './UI/input/MainInput';
import MainSelect from './UI/select/MainSelect';
const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MainSelect
                defaultValue="Select sorting"
                onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
                options={[
                    { value: "body", text: "By Description" },
                    { value: "title", text: "By Title" },
                ]}

            />

            <MainInput
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            />
        </div>
    )
}
export default PostFilter;