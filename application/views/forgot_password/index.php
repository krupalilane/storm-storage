<!-- BEGIN FORGOT PASSWORD FORM -->
<?php if($this->session->flashdata('error')) { ?>
    <div class="alert alert-warning alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <?php echo $this->session->flashdata('error'); ?>
    </div>
<?php } ?>
<?php if($this->session->flashdata('success')) { ?>
    <div class="alert alert-success alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <?php echo $this->session->flashdata('success'); ?>
    </div>
<?php } ?>
<form class="forget-form" id="forget-form" action="<?php echo site_url('forgot_password/change_password');?>" method="post">
    <h3 class="form-title"><i class="fa fa-unlock"></i>&nbsp;Reset Password ?</h3>
    <p> Enter your e-mail address below to reset your password. </p>
    <div class="form-group">
        <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" id="email" name="email" /> 
        <input class="form-control placeholder-no-fix" type="hidden" id="user_id" name="user_id" /> 
    </div>
    <div class="form-actions">
        <a href="<?php echo site_url('login');?>" id="back-btn" class="btn red">Back</a>
        <button type="submit" class="btn btn-red uppercase pull-right">Submit</button>
    </div>
</form>
<!-- END FORGOT PASSWORD FORM -->
<script>
    var check_email_url = "<?php echo site_url('forgot_password/check_email');?>";
</script>