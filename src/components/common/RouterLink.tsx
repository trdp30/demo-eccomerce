import { Link, LinkBaseProps } from '@mui/material';
import React from 'react';
import { Link as RouteLink, LinkProps } from 'react-router-dom';

type Props = LinkProps & LinkBaseProps;

const RouterLink: React.FC<Props> = (props) => {
  const { children, sx = {}, to, ...rest } = props;
  return (
    <Link
      component={RouteLink}
      to={to}
      sx={{ textDecoration: 'none', color: '#000', ...sx }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
