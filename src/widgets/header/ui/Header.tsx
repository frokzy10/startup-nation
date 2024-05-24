"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from "@/widgets/header/ui/Header.styles";
import Link from "next/link";
import AssistantIcon from '@mui/icons-material/Assistant';


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    // <Menu
    //     anchorEl={mobileMoreAnchorEl}
    //     anchorOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //     }}
    //     id={mobileMenuId}
    //     keepMounted
    //     transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //     }}
    //     open={isMobileMenuOpen}
    //     onClose={handleMobileMenuClose}
    // >


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Link href="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block', color: "white"}}}
                        >
                            Navigation Web
                        </Typography>
                    </Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Link href="/recommended">
                        <Box sx={{display: {xs: 'flex', md: 'flex'}}}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                                title="Рекомендации"
                            >
                                <AssistantIcon/>
                            </IconButton>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}