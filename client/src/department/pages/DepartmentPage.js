import React from 'react';
import Layout from 'layout/Layout';
import { useEffect } from 'react';
import { useState } from 'react';

function DepartmentPage() {
  return (
    <>
      <Layout>
        <div>
          <div class="department-tree">트리</div>
          <div class="department-map">맵</div>
        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;