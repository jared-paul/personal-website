const SearchBar = ({input, onChange}) =>
{
    return (
        <div>
            <input 
                className="form-control post-search" 
                type="text" 
                placeholder="Search" 
                aria-label="Search" 
                value={input} 
                onChange={(e) => onChange(e.target.value)}
                />
            <style jsx>
                {`
                .post-search {
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                    width: 75%;
                }
                `}
            </style>
        </div>
    )
}

export default SearchBar;