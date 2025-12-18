import { useState } from "react"

const useDataLoading = () => {

    const [dataLoading, setDataLoading] = useState(true);

    return {dataLoading,setDataLoading};

}

export default useDataLoading;