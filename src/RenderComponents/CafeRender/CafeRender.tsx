import React from 'react';
import {ICafe} from "@/RenderComponents/Types/types";

const CafeRender = ({cafe}:{cafe:ICafe}) => {
    return (
        <div>
            {cafe.name}
        </div>
    );
};

export default CafeRender;