import React from 'react';

interface LoadingIndicatorProps {
    show: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ show }) => (
    <div>{show ? 'Fetching...' : null}</div>
);

export default LoadingIndicator;
