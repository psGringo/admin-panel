export const getComparer = (sortParam, sortDirection) => {
    switch (sortParam) {
        case 'positions': {
            return (sortDirection === 'asc') ? (a, b) => {
                return a.positions - b.positions
            } : (a, b) => {
                return b.positions - a.positions
            }
        }

        case 'state': {
            return (sortDirection === 'asc') ? (a, b) => {
                return a.state.localeCompare(b.state)
            } : (a, b) => {
                return b.state.localeCompare(a.state)
            }
        }

        case 'summa': {
            return (sortDirection === 'asc') ? (a, b) => {
                return a.summa - b.summa
            } : (a, b) => {
                return b.summa - a.summa
            }
        }

        case 'person': {
            return (sortDirection === 'asc') ? (a, b) => {
                return a.person.localeCompare(b.person)
            } : (a, b) => {
                return b.person.localeCompare(a.person)
            }
        }

        case 'date': {
            return (sortDirection === 'asc') ? (a, b) => {
                return a.date.getTime() - b.date.getTime()
            } : (a, b) => {
                return b.date.getTime() - a.date.getTime()
            }
        }
    }
}


// --- Asc

const dateComparerAsc = (a, b) => {
    return a.getTime() - b.getTime()
}

const numComparerAsc = (a, b) => {
    return a.sortParam - b.sortParam
}

const strComparerAsc = (a, b) => a.localeCompare(b);

export const getComparerAsc = (sortParam) => {
    let res;
    switch (sortParam) {
        case 'date':
            res = dateComparerAsc;
            break;
        case 'positions':
            res = numComparerAsc
            break;
        case 'summa':
            res = numComparerAsc
            break;
        default:
            res = strComparerAsc;
    }
    return (res);
}

// --- Desc

const dateComparerDesc = (a, b) => {
    return b.getTime() - a.getTime()
}

const numComparerDesc = (a, b) => {
    return b - a
}

const strComparerDesc = (a, b) => b.localeCompare(a);


export const getComparerDesc = (sortParam) => {
    switch (sortParam) {
        case 'date':
            return dateComparerDesc
        case 'positions':
            return numComparerDesc
        case 'summa':
            return strComparerDesc
        default:
            return null;
    }
}
