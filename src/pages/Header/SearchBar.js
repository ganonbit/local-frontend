import React from 'react'

const SearchBar = () => {
    return (<form class="search-bar w-search notification-list friend-requests">
        <div class="form-group with-button">
            <input class="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
            <button>
                <svg class="olymp-magnifying-glass-icon">
                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"/> */}
                </svg>
            </button>
        </div>
    </form >
    )
}

export default SearchBar
