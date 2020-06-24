<?php

/**
 * Copyright (c) webevolutioners.com. All Rights Reserved
 * Company: webevolutioners
 * Author: Ajay Shrinivas
 * Email: ajay@webevolutioners.com
 * File: CRUD functionality of Installation Details
 * ***********************************************************************
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Installation extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('jobcard_model', 'jobcard');
        $this->load->model('common_model', 'common');
        $this->load->library("Aauth");
        if (!$this->aauth->is_loggedin()) {
            redirect('/user/', 'refresh');
        }
        if ($this->aauth->get_user()->roleid < 3) {

            exit('<h3>Sorry! You have insufficient permissions to access this section</h3>');
        }
    }

    public function index() {

        $conditions['select'] = '*';
        $data['installation'] = $this->common->getTableData('installation', $conditions, 1);
        
        $head['title'] = "Installation Details";
        $head['usernm'] = $this->aauth->get_user()->username;
        $this->load->view('fixed/header', $head);
        $this->load->view('installation/list', $data);
        $this->load->view('fixed/footer');
    }

    public function addInstallation() {

        $head['title'] = "Add Installation";
        $head['usernm'] = $this->aauth->get_user()->username;
        
        $sQuery = "SHOW TABLE STATUS LIKE 'installation'";

        $aResult = $this->common->processQuery($sQuery);
        $aData = $aResult->result();
        $data['installation_id'] = $aData[0]->Auto_increment;
        
        //$this->load->view('fixed/header', $head);
        $this->load->view('installation/add_installation', $data);
        $this->load->view('fixed/footer');
    }
    
    function details($sInstallationId, $sInstallationSrNo){
        $conditions['select'] = '*';
        $conditions['installation_id'] = $sInstallationId;
        $data['installation'] = $this->common->getTableData('installation', $conditions, NULL, 1);
        
        $conditions['select'] = '*';
        $conditions['where'] = array('installation_id' => $sInstallationId);
        $data['installation_products'] = $this->common->getTableData('installation_products', $conditions, 1);
        
        $conditions['select'] = '*';
        $conditions['where'] = array('installation_id' => $sInstallationId);
        $data['installation_technician'] = $this->common->getTableData('installation_technician', $conditions, 1);
        
        $data['installation_id'] = $sInstallationSrNo;
        $head['title'] = "Installation $sInstallationSrNo";
        $head['usernm'] = '';
        
        $this->load->view('installation/header', $head);
        $this->load->view('installation/view', $data);
        $this->load->view('fixed/footer');
    }
    
    function printInstallation(){
        $sInstallationId = intval($this->input->get('id'));
        $sInstallationSrNo = $this->input->get('jb');

        $data['title'] = "JobCard $sInstallationId";
        
        $conditions['select'] = '*';
        $conditions['installation_id'] = $sInstallationId;
        $data['installation'] = $this->common->getTableData('installation', $conditions, NULL, 1);
        
        $conditions['select'] = '*';
        $conditions['where'] = array('installation_id' => $sInstallationId);
        $data['installation_products'] = $this->common->getTableData('installation_products', $conditions, 1);
        
        $conditions['select'] = '*';
        $conditions['where'] = array('installation_id' => $sInstallationId);
        $data['installation_technician'] = $this->common->getTableData('installation_technician', $conditions, 1);
        
        $data['installation_id'] = $sInstallationSrNo;
        $head['title'] = "Installation $sInstallationSrNo";
        
        $data['job_id'] = $sInstallationSrNo;
        
        ini_set('memory_limit', '64M');

        $html = $this->load->view('installation/view-print', $data, true);
        
        //PDF Rendering
        $this->load->library('pdf');

        $pdf = $this->pdf->load();

        //$pdf->SetHTMLFooter('<table width="100%" style="vertical-align: bottom; font-family: serif; font-size: 8pt; color: #959595; font-weight: bold; font-style: italic;"><tr><td width="33%"><span style="font-weight: bold; font-style: italic;">{DATE j-m-Y}</span></td><td width="33%" align="center" style="font-weight: bold; font-style: italic;">{PAGENO}/{nbpg}</td><td width="33%" style="text-align: right; ">#' . $tid . '</td></tr></table>');

        $pdf->WriteHTML($html);

        if ($this->input->get('d')) {

            $pdf->Output('Installation#' . $sInstallationSrNo . '.pdf', 'D');
        } else {
            $pdf->Output('Installation#' . $sInstallationSrNo . '.pdf', 'I');
        }

    }

    function submitInstallation() {
        if ($this->input->post('submit')) {

			$aInstallation = array(
                'copper_pipes_qty_1_4' => $this->input->post('copper_pipes_qty_1_4'),
                'copper_pipes_units_1_4' => $this->input->post('copper_pipes_units_1_4'),
                'copper_pipes_qty_1_2' => $this->input->post('copper_pipes_qty_1_2'),
                'copper_pipes_units_1_2' => $this->input->post('copper_pipes_units_1_2'),
                'copper_pipes_qty_5_8' => $this->input->post('copper_pipes_qty_5_8'),
                'copper_pipes_units_5_8' => $this->input->post('copper_pipes_units_5_8'),
                'copper_pipes_qty_3_4' => $this->input->post('copper_pipes_qty_3_4'),
                'copper_pipes_units_3_4' => $this->input->post('copper_pipes_units_3_4'),
                'copper_pipes_qty_3_8' => $this->input->post('copper_pipes_qty_3_8'),
                'copper_pipes_units_3_8' => $this->input->post('copper_pipes_units_3_8'),
                'copper_pipes_qty_1' => $this->input->post('copper_pipes_qty_1'),
                'copper_pipes_units_1' => $this->input->post('copper_pipes_units_1'),
                'copper_pipes_qty_1_1_4' => $this->input->post('copper_pipes_qty_1_1_4'),
                'copper_pipes_units_1_1_4' => $this->input->post('copper_pipes_units_1_1_4'),
                'technical_notes' => $this->input->post('technical_notes'),
                'bracket' => $this->input->post('bracket'),
                'bracket_price' => $this->input->post('bracket_price'),
                'trunk' => $this->input->post('trunk'),
                'trunk_price' => $this->input->post('trunk_price'),
                'copper_pipes' => $this->input->post('copper_pipes'),
                'copper_pipes_price' => $this->input->post('copper_pipes_price'),
                'ac_transfer' => $this->input->post('ac_transfer'),
                'ac_transfer_price' => $this->input->post('ac_transfer_price'),
                'remove_ac' => $this->input->post('remove_ac'),
                'remove_ac_price' => $this->input->post('remove_ac_price'),
                'long_dist' => $this->input->post('long_dist'),
                'long_dist_price' => $this->input->post('long_dist_price'),
                'ac_wo_pipes' => $this->input->post('ac_wo_pipes'),
                'ac_wo_pipes_price' => $this->input->post('ac_wo_pipes_price'),
                'total_amount' => $this->input->post('total_amount'),
                'phone' => $this->input->post('phone'),
                'customer_name' => $this->input->post('customer_name'),
                'address' => $this->input->post('address'),
                'date' => $this->input->post('date'),
                'start_time' => $this->input->post('start_time'),
                'end_time' => $this->input->post('end_time'),
                'financial_status' => $this->input->post('financial_status'),
                'showroom' => $this->input->post('showroom'),
                'sales_repair' => $this->input->post('sales_repair'),
                'sales_mobile' => $this->input->post('sales_mobile'),
                'sales_notes' => $this->input->post('sales_notes')
            );
            
			$sInstallationId = $this->common->updateTable('installation', $aInstallation);
            $sInstallationSrNo = 'IS100'.$sInstallationId;
            $aInstallationUpdate = array('installation_sr_no' => $sInstallationSrNo);
            
            $aConditions['installation_id'] = $sInstallationId;
            
            $sReturn = $this->common->updateTable('installation', $aInstallationUpdate, $aConditions);
            
            //Job Card Product Details
            $aDescription = $this->input->post('description');
            foreach($aDescription as $key => $value){
                
                $aDescription = $this->input->post('description');
                $aQtyIdu = $this->input->post('qty_idu');
                $aQtyOdu = $this->input->post('qty_odu');
                $aWordDoneIdu = $this->input->post('work_done_idu');
                $aWordDoneOdu = $this->input->post('work_done_odu');
                $aBalanceIdu = $this->input->post('balance_idu');
                $aBalanceOdu = $this->input->post('balance_odu');
                
                if($aDescription[$key] != ''){
                    $aInstallationProducts = array(
                        'installation_id' => $sInstallationId,
                        'installation_sr_no' => $sInstallationSrNo,
                        'description' => $aDescription[$key],
                        'qty_idu' => $aQtyIdu[$key],
                        'qty_odu' => $aQtyOdu[$key],
                        'work_done_idu' => $aWordDoneIdu[$key],
                        'work_done_odu' => $aWordDoneOdu[$key],
                        'balance_idu' => $aBalanceIdu[$key],
                        'balance_odu' => $aBalanceOdu[$key]
                    );
                    
                    $sInstallationProductId = $this->common->updateTable('installation_products', $aInstallationProducts);
                    
                }
            }
            
            //Job Card Technician Details
            $aTechnicianCode = $this->input->post('technician_code');
            foreach($aTechnicianCode as $key => $value){
                $aTechnicianName = $this->input->post('technician_name');
                $aTechnicianCode = $this->input->post('technician_code');
                $aGroup = $this->input->post('group');
                $aMobile = $this->input->post('mobile');
                
				if($aTechnicianCode[$key] != ''){
                    $aInstallationTechnician = array(
                        'installation_id' => $sInstallationId,
                        'installation_sr_no' => $sInstallationSrNo,
                        'technician_code' => $aTechnicianCode[$key],
                        'technician_name' => $aTechnicianName[$key],
                        'group' => $aGroup[$key],
                        'mobile' => $aMobile[$key]
                    );
                    
                    $sInstallationTechnicianId = $this->common->updateTable('installation_technician', $aInstallationTechnician);
                    
                }
            }
            
        }
		redirect('installation');
    }
}
