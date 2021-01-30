import React, { Fragment } from 'react';
import { AddNewPartner, AddNewService, EditPartner, DeleteConfirm, EditService } from 'lib/components/Popup';
import { connect } from 'react-redux';
import AdminDashboard from './Admin';
import PartnerDashboard from './Partner';

const Dashboard = ({ dispatch, role, ...props }) => {
  return (
    <Fragment>
      { role === 'Admin' && <AdminDashboard /> }
      { role === 'SP' && <PartnerDashboard /> }

      { props.showModalNewPartner && <AddNewPartner /> }
      { props.showModalEditPartner && <EditPartner /> }
      { props.showModalDeleteConfirm && <DeleteConfirm /> }
      { props.showModalNewService && <AddNewService /> }
      { props.showModalEditService && <EditService /> }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  ...state.modalControl,
  role: state.auth.user.role
})

export default connect(mapStateToProps)(Dashboard);