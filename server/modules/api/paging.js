/**
 * 쿼리파라미터에서 페이징 변수를 파싱
 * @param {httprequest} req 
 * @returns 
 */
const parseQueryString = (req) => {
    const total = req.query?.total ?? 0;
    const rows = req.query?.rows ?? 10;
    const page = req.query?.page ?? 1;
    const size = req.query?.size ?? 10;

    const tempEnd = Math.ceil(page / size) * size;
    const start = tempEnd - (size - 1);
    const totalPage = Math.ceil(total / rows);
    const end = Math.min(totalPage, tempEnd);

    return {
        total: total,
        rows: rows,
        page: page,
        size: size,
        totalPage: totalPage,
        start: start,
        end: end,
        prev: start > 1,
        next: totalPage > tempEnd,
        pageList: Array.from({length: size}, (v, i) => i + start)
    }
}

/**
 * 데이터 총 개수와 함께 페이징 객체 계산
 * @param {paging} paging 
 * @param {Number} total 
 * @returns 
 */
const calculatePaging = (paging, total) => {
    const rows = paging?.rows ?? 10;
    const page = paging?.page ?? 1;
    const size = paging?.size ?? 10;
    const tempEnd = Math.ceil(page / size) * size;
    const start = tempEnd - (size - 1);
    const totalPage = Math.ceil(total / rows);
    const end = Math.min(totalPage, tempEnd);
    return {
        total: total,
        rows: rows,
        page: page,
        size: size,
        totalPage: totalPage,
        start: start,
        end: end,
        prev: start > 1,
        next: totalPage > tempEnd,
        pageList: Array.from({length: size}, (v, i) => i + start)
    }
    
}

export default {
    parseQueryString: parseQueryString,
    calculatePaging: calculatePaging
}