import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

import { TreeItem, TreeView } from "@mui/x-tree-view";
import { Add, ChevronRight, Dashboard, ExpandMore, PostAdd, VerifiedUser } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to="/" className='flex justify-center items-center gap-2'>
                {/* <img src={logo} alt="Log" /> <p className='text-4xl font-bold text-primary'> Book Share </p> */}
            </Link>
            <Link to="/admin/dashboard">
                <p> <Dashboard /> Dashboard</p>
            </Link>
            <Link>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMore />}
                    defaultExpandIcon={<ChevronRight />}

                >
                    <TreeItem nodeId="1" label="Products">
                        <Link to="/admin/new-book">
                            <TreeItem nodeId="2" label="Add" icon={<Add />} />
                        </Link>
                        <Link to="/admin/products">
                            <TreeItem nodeId="3" label="All" icon={<PostAdd />} />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="5" label="Accessories">
                        <TreeItem nodeId="10" label="Add" icon={<Add />} />
                        <TreeItem nodeId="6" label="All" icon={<PostAdd />} />
                    </TreeItem>

                    <TreeItem nodeId="25" label="User">
                        <TreeItem nodeId="23" label="Users" icon={<VerifiedUser />} />
                    </TreeItem>
                    <TreeItem nodeId="35" label="Orders">
                        <TreeItem nodeId="33" label="Add" icon={<Add />} />
                        <TreeItem nodeId="36" label="All" icon={<PostAdd />} />
                    </TreeItem>
                    <TreeItem nodeId="15" label="Blog">
                        <TreeItem nodeId="13" label="Add Blog" icon={<Add />} />
                        <TreeItem nodeId="16" label="All Blog" icon={<PostAdd />} />
                    </TreeItem>
                </TreeView>
            </Link>


        </div>
    );
};

export default Sidebar;